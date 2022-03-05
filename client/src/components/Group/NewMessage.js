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
            <div className="flex w-full items-end justify-end space-y-1">
              <Field
                rows={2}
                component="textarea"
                className="text-md mr-2 w-full rounded-b-2xl rounded-tl-2xl border-[1px] border-indigo-800 bg-white focus:ring-0 md:text-sm"
                name="message"
                placeholder="message"
              />
              <p className="text-xs text-red-700">{props.errors.message}</p>
            </div>
            <button
              className="h-[38px] w-full rounded bg-indigo-600 text-white transition-all hover:bg-indigo-700"
              type="submit"
              disabled={props.isSubmitting}
            >
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewMessage;
