import Button from "./Button";

const Tags = () => {
  const btns = [
    "populer",
    "Watching now",
    "behind acenw",
    "privatesociety",
    "lady sissis ma ys",
    "il gatto mammone",
    "hostel erotic",
    "amature shared",
    "peeping tim",
    "hoe damato",
    "hindi bhabhi movies",
    "sakura mana",
    "learning the son",
    "deep anal dildo",
    "eva lopezzz",
    "dinner and a side",
    "orasul calaeasi",
    "private teacher",
    "faffy",
    "kamalika chanda",
    "nc tiffany",
    "sone166",
  ];
  console.log(btns);

  return (
    <>
      <div className="pt-3 hidden md:block">
        <div className="overflow-hidden space-x-1.5 space-y-1.5">
          {btns.map((btn, i) => (
            <Button key={i}>{btn}</Button>
          ))}
        </div>
        <div className="">
          <div></div>
          <div></div>
        </div>
        <div className="">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Tags;
