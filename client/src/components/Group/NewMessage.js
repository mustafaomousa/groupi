import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { createGroupMessage } from "../../store/group";

const NewMessage = ({ group }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ message: "" }}
      onSubmit={async (values, actions) => {
        await dispatch(createGroupMessage(group.id, values.message));
        actions.resetForm();
      }}
    >
      {(props) => (
        <Form className="w-full" method="post">
          <div className="flex w-full flex-col items-end justify-end space-y-2">
            <div className="flex w-full items-end justify-end">
              <Field
                component="textarea"
                className="w-full resize-none rounded border-[1px] border-zinc-800/20 text-sm shadow focus:ring-0"
                name="message"
              />
              <p className="text-xs text-red-700">{props.errors.message}</p>
            </div>
            <button
              className="rounded bg-indigo-700 py-1 px-2 text-xs font-bold text-white shadow"
              type="submit"
              disabled={props.isSubmitting}
            >
              <p>Send</p>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewMessage;
