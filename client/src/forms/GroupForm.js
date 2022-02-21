import { Field, Form, Formik } from "formik";

const GroupForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        bio: "",
        header_picture: "",
        profile_picture: "",
      }}
      onSubmit={async (values, actions) => {}}
    >
      {(props) => (
        <Form className="w-full" method="post">
          <div className="space-y-4">
            <div className="space-y-2">
              <Field
                className="w-full bg-zinc-50 px-2 py-1.5 border rounded"
                name="name"
                placeholder="name"
              />
              <p className="text-xs text-red-700">{props.errors.name}</p>
              <Field
                className="w-full bg-zinc-50 px-2 py-1.5 border rounded"
                name="bio"
                placeholder="bio"
              />
              <p className="text-xs text-red-700">{props.errors.bio}</p>
            </div>
            <button
              className="w-full bg-zinc-800 hover:bg-zinc-700 disabled:bg-zinc-200 text-white font-bold px-2 py-1.5 rounded shadow"
              type="submit"
              disabled={props.isSubmitting}
            >
              create
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default GroupForm;
