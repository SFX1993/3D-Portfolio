import { logoIconsList } from "../constants";
const logoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marguee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge">
        <div className="gradient-edge">
          <div className="marguee h-52">
            <div className="marguee-box md:gap-12 gap-5">
              {logoIconsList.map((icon) => (
                <logoIcon key={icon.name} icon={icon} />
              ))}
              {logoIconsList.map((icon) => (
                <logoIcon key={icon.name} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoSection;
