import {
  ExpressJSLogo,
  FirebaseLogo,
  GithubLogo,
  JavaScriptLogo,
  LaravelLogo,
  MongoDBLogo,
  MysqlLogo,
  NodeJSLogo,
  ReactJSLogo,
  TailwindCSSLogo,
} from "../Assets/AssetsList";
import SkillsCard from "../components/SkillsCard";
import Title from "../components/Title";

const Skills = () => {
  const data = [
    TailwindCSSLogo,
    JavaScriptLogo,
    ReactJSLogo,
    NodeJSLogo,
    ExpressJSLogo,
    GithubLogo,
    LaravelLogo,
    MysqlLogo,
    MongoDBLogo,
    FirebaseLogo,
  ];

  const TitleText = (
    <h1 className=" text-gray-800 font-bebas-neue text-4xl dark:text-white pb-6 ">
      Where <strong className="text-fadeMainTheme">Passion</strong> Meets{" "}
      <strong className="text-fadeMainTheme">Proficiency Tools</strong>
    </h1>
  );
  return (
    <div className="my-20 flex justify-center items-center flex-col">
      <Title text={TitleText} id="skills" />
      <div
        id="skills"
        className="grid grid-cols-2 lg:grid-cols-5  gap-10 mt-10 px-10 lg:ml-10 lg:w-10/12 max-w-fit"
      >
        {data.map((item, index) => (
          <SkillsCard imgSrc={item} index={index} key={index} />
        ))}
      </div>
      <div className="flex justify-center items-center flex-col my-20"></div>
    </div>
  );
};

export default Skills;
