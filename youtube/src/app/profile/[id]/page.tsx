export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl">Profile</h1>
      <hr />
      <p className="text-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum incidunt
        vero cum tempore dolorum quo voluptates accusantium mollitia minus, unde
        eum distinctio neque ex error ullam sunt, dolores excepturi quis quasi?
        Aliquam quia temporibus at eos. Nam beatae accusamus nostrum recusandae
        nisi vero, facilis non?
        <span className="p-2 ml-2 rounded bg-orange-500 text-black">
          {params.id}
        </span>
      </p>
    </div>
  );
}
