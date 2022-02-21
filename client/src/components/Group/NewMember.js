import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { inviteMember } from "../../store/group";

const NewMember = ({ group, toggleAddUser, addUserShown }) => {
  const dispatch = useDispatch();

  const [userSearchResults, setUserSearchResults] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState({});

  const updateSelectedUsers = (e, user) => {
    e.preventDefault();

    return setSelectedUsers({
      ...selectedUsers,
      [user.id]: user,
    });
  };

  const removeSelectedUser = (e, userId) => {
    e.preventDefault();
    setSelectedUsers((previousState) => {
      const newState = { ...previousState };
      delete newState[userId];
      return newState;
    });
  };

  const onSearchUser = async (e) => {
    e.preventDefault();
    const data = await fetch(`/api/users/${e.target.value}`);

    if (data.ok) {
      const users = await data.json();
      setUserSearchResults(users);
    }
  };

  useEffect(() => {
    console.log(selectedUsers);
  }, [selectedUsers]);

  return (
    <div
      class={`${
        !addUserShown && "hidden"
      } absolute top-0 left-0 flex items-center justify-center  w-screen h-screen bg-white/30 backdrop-blur-sm`}
    >
      <div class="w-[600px] p-5 bg-white flex flex-col items-start">
        <Formik
          initialValues={{ requested_message: "" }}
          onSubmit={async (values, actions) => {
            Object.keys(selectedUsers).map(async (userId) => {
              const user = selectedUsers[userId];
              const membership = {
                group_id: group.id,
                user_id: user.id,
                requested_message: values.requested_message,
              };
              await dispatch(inviteMember(membership)).then((errors) => {
                actions.setErrors(errors);
              });
            });

            return toggleAddUser();
          }}
        >
          {(props) => (
            <Form className="w-full" method="post">
              <div className="p-10 space-y-4">
                <div className="space-y-2">
                  <div>
                    <input
                      onChange={onSearchUser}
                      className="w-full bg-zinc-50 px-2 py-1.5 border rounded"
                      name="username"
                      placeholder="@ username"
                    />
                    <div className="flex flex-col divide-y-[1px] divide-zinc-300 bg-zinc-100 max-h-20 overflow-y-scroll">
                      {userSearchResults &&
                        Object.keys(userSearchResults).length !== 0 &&
                        Object.keys(userSearchResults).map((userId) => {
                          const user = userSearchResults[userId];
                          if (user.username)
                            return (
                              <button
                                onClick={(e) => updateSelectedUsers(e, user)}
                                className="py-1 px-2 text-left"
                              >
                                + {user.username}
                              </button>
                            );
                        })}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {selectedUsers &&
                      Object.keys(selectedUsers).map((userId) => {
                        const user = selectedUsers[userId];
                        return (
                          <button
                            onClick={(e) => removeSelectedUser(e, user.id)}
                            className="border rounded  px-1.5 bg-zinc-800 text-white text-sm"
                          >
                            {user.username}
                          </button>
                        );
                      })}
                  </div>
                  <Field
                    className="w-full bg-zinc-50 px-2 py-1.5 border rounded"
                    name="requested_message"
                    placeholder="invitation message"
                  />
                </div>
                <button
                  className="w-full bg-zinc-800 hover:bg-zinc-700 disabled:bg-zinc-200 text-white font-bold px-2 py-1.5 rounded shadow"
                  type="submit"
                  disabled={props.isSubmitting}
                >
                  invite member
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewMember;
