export default function LikeButton(props: { id: number }) {
  async function onLike() {
    "use server";
    console.log(props.id);
  }
  // todo add to likes table user_id and poast they liked, if they already liked it then unlike it and remove from db.
  // todo conditional render the like/unlike button
  return (
    <form action={onLike}>
      <button type="submit">Like</button>
    </form>
  );
}
