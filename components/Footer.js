import Image from "next/image";
import Facebook from "../public/social/facebook.svg";
import Instagram from "../public/social/instagram.svg";
import Twitter from "../public/social/twitter.svg";

const Footer = () => {
  return (
    <div className="bg-secondary py-16">
      <div className="w-10/12 mx-auto grid grid-cols-3 gap-5 container justify-items-center">
        <div className="w-full mx-auto">
          <p className="font-bold text-xl">Logo</p>
          <p className="mt-2">© All right reserverd MH Shuvo</p>
        </div>
        <div className="w-full mx-auto">
          <p className="text-xl font-semibold">About us</p>
          <p className="mt-2 text-justify">
            Ut excepteur aliqua id do ut fugiat et nostrud. Aliquip pariatur
            labore exercitation laboris ad irure exercitation non proident
            cillum ad excepteur esse aliquip. Quis exercitation et veniam ex in
            ea duis magna ullamco. Lorem anim reprehenderit elit esse commodo
            cupidatat proident ad ipsum nisi officia. Dolore labore ipsum
            excepteur officia. Pariatur dolore deserunt minim consequat culpa
            incididunt.
          </p>
        </div>
        <div className="w-full mx-auto">
          <p className="text-xl font-semibold">Contact us</p>
          <div className="mt-2">
            <p>mlhnshuvo@gmail.com</p>
            <p>+88-01712-892969</p>
          </div>
          <div className="flex gap-5 mt-5">
            <Image
              src={Facebook}
              alt={Facebook}
              width={20}
              className="cursor-pointer"
            />
            <Image
              src={Instagram}
              alt={Instagram}
              width={20}
              className="cursor-pointer"
            />
            <Image
              src={Twitter}
              alt={Twitter}
              width={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
