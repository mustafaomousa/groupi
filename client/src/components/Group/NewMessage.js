import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { createGroupMessage } from "../../store/group";

const NewMessage = ({ group }) => {
  const dispatch = useDispatch();

  return (
    <div className="">
      <Formik
        initialValues={{ message: "" }}
        onSubmit={async (values, actions) => {
          await dispatch(createGroupMessage(group.id, values.message));
          actions.resetForm();
        }}
      >
        {(props) => (
          <Form className="flex justify-end" method="post">
            <div className="flex w-full flex-col items-end justify-end space-y-2 p-2">
              <div className="flex w-full items-end justify-end space-y-1">
                <Field
                  rows={4}
                  component="textarea"
                  className="w-full max-w-[300px] rounded-t-lg rounded-bl-lg border-0 border-[1px] bg-white px-2 py-0.5 text-xs shadow md:text-sm"
                  name="message"
                  placeholder="message"
                />
                <p className="text-xs text-red-700">{props.errors.message}</p>
              </div>
              <button
                className="rounded bg-sky-700 px-1.5 py-1 text-xs font-bold text-white shadow hover:bg-sky-600 disabled:bg-zinc-200 md:text-sm"
                type="submit"
                disabled={props.isSubmitting}
              >
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewMessage;
