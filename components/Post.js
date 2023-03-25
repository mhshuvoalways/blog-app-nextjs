import Image from "next/image";
import Post1 from "../public/posts/post(5).jpg";

const Post = () => {
  return (
    <div className="bg-secondary rounded-sm shadow-sm p-5 sm:p-10">
      <Image
        src={Post1}
        alt={Post1}
        placeholder="blur"
        className="rounded-sm mx-auto w-full"
      />
      <div className="mt-5">
        <p className="text-gray-400 text-sm uppercase">Programming - NOV 17, 2023</p>
        <p className="mt-3 text-xl">
          Esse velit officia officia eiusmod mollit fugiat exercitation amet.
        </p>
        <p className="text-gray-400 mt-2">
          Est qui irure nulla incididunt fugiat ut irure. Enim ullamco dolor
          exercitation exercitation ex mollit nisi exercitation anim. Sunt
          consectetur cillum dolor ea. Duis ea laboris anim ad culpa aliqua
          cillum et. Consequat incididunt fugiat ut occaecat quis nisi velit
          anim nisi minim anim est. <br /> <br />
          Sit exercitation qui amet ad et aliquip irure esse eiusmod proident
          culpa consequat. Mollit occaecat veniam eu officia eiusmod laboris
          sint exercitation voluptate sit. Reprehenderit velit irure eiusmod qui
          in esse excepteur eiusmod Lorem laborum. <br />
          Eiusmod excepteur quis duis anim. Commodo nostrud anim minim aliquip
          consectetur aliqua. Anim nisi non deserunt pariatur proident aute
          nostrud minim cillum duis aliquip culpa nulla. Ipsum elit voluptate
          quis reprehenderit ea amet. Sunt fugiat nulla nisi non nulla consequat
          cillum nisi sunt. Exercitation laboris sint culpa mollit aliqua non
          minim deserunt laboris velit nisi exercitation proident.
          <br />
          <br />
          Aliquip ullamco labore ad enim ut nostrud esse et aliquip id elit
          ullamco. Aute est sint duis irure qui esse dolor anim cillum mollit
          commodo esse. Consectetur et nisi elit ex in deserunt nisi. Fugiat id
          occaecat do excepteur aute eiusmod ad ad adipisicing occaecat qui
          nisi. Consectetur est enim nisi do duis aliqua incididunt veniam ea
          voluptate nisi. Eu consectetur sit veniam dolor laborum sunt ipsum
          fugiat. Voluptate ea proident laborum do fugiat nisi id tempor nostrud
          aliquip qui pariatur Lorem laboris. Velit occaecat aliquip magna
          voluptate do occaecat amet enim. Nisi irure velit magna Lorem veniam
          cillum commodo enim reprehenderit ut.
          <br />
          <br /> Deserunt nostrud amet irure ullamco irure et consectetur. Enim
          in duis commodo commodo. Irure do non officia elit. Et elit ipsum
          consequat non sint incididunt amet enim fugiat. Est veniam eiusmod
          tempor amet dolore do proident.
        </p>
      </div>
    </div>
  );
};

export default Post;
