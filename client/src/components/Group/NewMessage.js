import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";

const NewMessage = ({ group }) => {
  const dispatch = useDispatch();

  return (
    <div className="">
      <Formik
        initialValues={{ message: "" }}
        onSubmit={async (values, actions) => {
          const response = await fetch(`/api/groups/${group.id}/messages`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              message: values.message,
            }),
          });
          const data = await response.json();
          console.log(data);
        }}
      >
        {(props) => (
          <Form className="flex justify-end" method="post">
            <div className="flex flex-col items-end justify-end space-y-2 p-2">
              <div className="space-y-2">
                <Field
                  className="w-60 rounded border bg-zinc-50 px-2 py-1.5"
                  name="message"
                  placeholder="message"
                />
                <p className="text-xs text-red-700">{props.errors.message}</p>
              </div>
              <button
                className="rounded bg-zinc-800 px-2 py-1.5 font-bold text-white shadow hover:bg-zinc-700 disabled:bg-zinc-200"
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
