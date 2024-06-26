"use client";
import style from "./adminPostForm.module.css";
import { addPost } from "../../lib/action";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className={style.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea name="desc" type="text" id="" rows={10} placeholder="desc" />
      <button>Add</button>
      {state && state.error}
    </form>
  );
};
export default AdminPostForm;
