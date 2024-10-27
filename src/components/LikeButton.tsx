export default function LikeButton(props: { id: number }) {
  async function onLike() {
    "use server";
    console.log(props.id);
  }
  return (
    <form action={onLike}>
      <button type="submit">Like</button>
    </form>
  );
}
