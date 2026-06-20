import { createFileRoute } from "@tanstack/react-router";
import { Crown, BadgeInfo, BriefcaseBusiness, UsersRound, UserCheck } from "lucide-react";
import { useT } from "@/lib/i18n";

type Person = {
  name: { ml: string; en: string };
  role: { ml: string; en: string };
  photo?: string;
};

type LabelList = {
  title: { ml: string; en: string };
  items: { ml: string; en: string; photo?: string }[];
  icon: typeof Crown;
};

const board: Person[] = [
  {
    name: { ml: "കെ. മനോജ്", en: "K. Manoj" },
    role: { ml: "പ്രസിഡണ്ട്", en: "President" },
    photo: "https://www.image2url.com/r2/default/images/1781948696617-80e6af19-ea8d-4c3c-951a-b7a76a3a8cb1.jpg",
  },
  {
    name: { ml: "കെ. ദിനേശ് കുമാർ", en: "K. Dinesh Kumar" },
    role: { ml: "വൈസ് പ്രസിഡണ്ട്", en: "Vice President" },
    photo: "https://www.image2url.com/r2/default/images/1781948795475-4b5d62dc-ae66-4dda-a0eb-4ba1f7bd2b61.jpg",
  },
];

const directors: Person[] = [
  { name: { ml: "കെ. രവീന്ദ്രൻ", en: "K. Ravindran" }, role: { ml: "ഡയറക്ടർ", en: "Director" }, photo: "https://www.image2url.com/r2/default/images/1781948878285-6c149109-48a3-4775-8b6c-ee70f88d2a5d.jpg" },
  { name: { ml: "കെ. ശേഖരൻ", en: "K. Sekharan" }, role: { ml: "ഡയറക്ടർ", en: "Director" }, photo: "https://www.image2url.com/r2/default/images/1781949256931-361cd9a5-6289-4d72-b6c6-adb6cd55a274.jpg" },
  { name: { ml: "രാമചന്ദ്രമേനോൻ. പി", en: "Ramachandran Menon. P" }, role: { ml: "ഡയറക്ടർ", en: "Director" }, photo: "https://www.image2url.com/r2/default/images/1781950531679-859bd98a-8fc6-4771-a838-3c5634eb6620.png" },
  { name: { ml: "കണ്ണന്‍. വി എസ്", en: "Kannan. V. S" }, role: { ml: "ഡയറക്ടർ", en: "Director" }, photo: "https://www.image2url.com/r2/default/images/1781949151388-9ac5d6e3-26aa-4079-8a7d-1d7279506d08.jpg" },
  { name: { ml: "മണി മേനോൻ. ടി", en: "Mani Menon. T" }, role: { ml: "ഡയറക്ടർ", en: "Director" }, photo: "https://www.image2url.com/r2/default/images/1781949196402-67bc9967-54ec-45a2-a5fd-66db70f38035.jpg" },
  { name: { ml: "ശോഭ പി മേനോൻ", en: "Shobha P. Menon" }, role: { ml: "ഡയറക്ടർ", en: "Director" }, photo: "https://www.image2url.com/r2/default/images/1781948925822-f64410fb-7e2b-4769-9c4e-3f43f5ccc052.png" },
  { name: { ml: "രാജി സുരേഷ്", en: "Raji Suresh" }, role: { ml: "ഡയറക്ടർ", en: "Director" }, photo: "https://www.image2url.com/r2/default/images/1781949019357-dba08af2-6b4c-4cc9-bac8-50a54fca1ee6.jpg" },
  { name: { ml: "ജയലക്ഷ്മി. ടി ജി", en: "Jayasree T. G" }, role: { ml: "ഡയറക്ടർ", en: "Director" }, photo: "https://www.image2url.com/r2/default/images/1781949092895-ca33c370-e2b4-4b3a-bef7-2d10676fadc5.jpg" },
];

const staff: Person[] = [
  { name: { ml: "പ്രിയ കെ.", en: "Priya K." }, role: { ml: "സെക്രട്ടറി", en: "Secretary" }, photo: "https://www.image2url.com/r2/default/images/1781950652883-c7366ce6-c299-4f3e-a5fc-1d03fc09cd94.png" },
  { name: { ml: "നീതു പി. എൻ.", en: "Nithu P. N." }, role: { ml: "സീനിയർ ക്ലർക്ക്", en: "Senior Clerk" }, photo: "https://www.image2url.com/r2/default/images/1781950652883-c7366ce6-c299-4f3e-a5fc-1d03fc09cd94.png" },
  { name: { ml: "ശാലിനി ടി. ആർ.", en: "Shalini T. R." }, role: { ml: "ജൂനിയർ ക്ലർക്ക്", en: "Junior Clerk" }, photo: "https://www.image2url.com/r2/default/images/1781950652883-c7366ce6-c299-4f3e-a5fc-1d03fc09cd94.png" },
];

const heritageSections: LabelList[] = [
  {
    icon: Crown,
    title: { ml: "ചീഫ് പ്രമോട്ടർ", en: "Chief Promoter" },
    items: [{ ml: "ശ്രീ കല്ലൂർ ബാബു", en: "Sri Kallur Babu", photo: "https://www.image2url.com/r2/default/images/1781950079207-3a2184a3-7bc3-4421-af7e-caa64c92ec0d.jpeg" }],
  },
  {
    icon: UsersRound,
    title: { ml: "പ്രമോട്ടർമാർ", en: "Promoters" },
    items: [
      { ml: "അഡ്വ. ഡി. ശങ്കരൻകുട്ടി", en: "Adv. D. Shankaran Kutty", photo: "https://www.image2url.com/r2/default/images/1781950531679-859bd98a-8fc6-4771-a838-3c5634eb6620.png" },
      { ml: "എം. പി. അജിത് കുമാർ", en: "M. P. Ajith Kumar", photo: "https://www.image2url.com/r2/default/images/1781950531679-859bd98a-8fc6-4771-a838-3c5634eb6620.png" },
      { ml: "ശശി ചക്രമത്ത്", en: "Shashi Chakramath", photo: "https://www.image2url.com/r2/default/images/1781950531679-859bd98a-8fc6-4771-a838-3c5634eb6620.png" },
      { ml: "കെ. ശേഖരൻ", en: "K. Sekharan", photo: "https://www.image2url.com/r2/default/images/1781950531679-859bd98a-8fc6-4771-a838-3c5634eb6620.png" },
      { ml: "ആർ. ബാലകൃഷ്ണൻ", en: "R. Balakrishnan", photo: "https://www.image2url.com/r2/default/images/1781950531679-859bd98a-8fc6-4771-a838-3c5634eb6620.png" },
      { ml: "എം. സുരേഷ്", en: "M. Suresh", photo: "https://www.image2url.com/r2/default/images/1781950027301-23c0d982-f4a1-4616-8eac-44d7b607b203.jpeg" },
    ],
  },
  {
    icon: UserCheck,
    title: { ml: "മുൻ പ്രസിഡണ്ടുമാർ", en: "Former Presidents" },
    items: [
      { ml: "ശശി ചക്രമത്ത്", en: "Shashi Chakramath" },
      { ml: "സി. ചന്ദ്രശേഖരമേനോൻ", en: "C. Chandrasekharamenon" },
    ],
  },
  {
    icon: BadgeInfo,
    title: { ml: "മുൻ വൈസ് പ്രസിഡണ്ടുമാർ", en: "Former Vice Presidents" },
    items: [
      { ml: "സൗമ്യ മേനോൻ", en: "Soumya Menon" },
      { ml: "കെ. മനോജ്", en: "K. Manoj" },
      { ml: "ശ്രീദേവി നന്ദകുമാർ", en: "Sreedeevi Nandakumar" },
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: { ml: "ആദ്യകാല ഡയറക്ടർമാർ", en: "Early Directors" },
    items: [
      { ml: "എം. പി. അജിത് കുമാർ", en: "M. P. Ajith Kumar" },
      { ml: "അഡ്വ. ഡി. ശങ്കരൻകുട്ടി", en: "Adv. D. Shankaran Kutty" },
      { ml: "എം. സുരേഷ്", en: "M. Suresh" },
      { ml: "കെ. ശേഖരൻ", en: "K. Sekharan" },
      { ml: "സിനി സുരേഷ്", en: "Sini Suresh" },
      { ml: "ബിന്ദു പ്രകാശ്", en: "Bindu Prakash" },
      { ml: "ഷൈലജ രാധാകൃഷ്ണൻ", en: "Shailaja Radhakrishnan" },
      { ml: "ആർ. ബാലകൃഷ്ണൻ", en: "R. Balakrishnan" },
      { ml: "എ. ഉണ്ണികൃഷ്ണൻ", en: "A. Unnikrishnan" },
      { ml: "കെ. ബി. ശ്രീധരൻ", en: "K. B. Sreedharan" },
      { ml: "മിനി ടി. കെ.", en: "Mini T. K." },
      { ml: "സുമതി കെ. കെ.", en: "Sumathi K. K." },
      { ml: "പ്രവീൺകുമാർ", en: "Praveen Kumar" },
      { ml: "ശ്രീദേവി നന്ദകുമാർ", en: "Sreedeevi Nandakumar" },
    ],
  },
];

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team - Mukundhapuram Socity Limited" },
      { name: "description", content: "Meet our current board, staff, and heritage leaders." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  const { lang } = useT();
  const ml = lang === "ml";
  const currentBoard = board;

  return (
    <>
      <section className="bg-gradient-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-85">{ml ? "ഞങ്ങളുടെ ടീം" : "Our Team"}</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tight">{ml ? "ഞങ്ങളുടെ ടീം" : "Our Team"}</h1>
          <p className="mt-5 max-w-3xl text-lg md:text-xl opacity-90">
            {ml
              ? "സംഘത്തിന്റെ സുഗമമായ പ്രവർത്തനങ്ങൾക്കും വളർച്ചയ്ക്കും നേതൃത്വം നൽകുന്ന ഭരണസമിതി അംഗങ്ങളെയും ജീവനക്കാരെയും മുൻകാല നേതാക്കളെയും പരിചയപ്പെടാം."
              : "Meet the board members, staff, and heritage leaders who guide the smooth operations and growth of the organization."}
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{ml ? "നിലവിലെ ഭരണസമിതി" : "Current Board of Directors"}</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">{ml ? "നിലവിലെ ഭരണസമിതി" : "Current Board of Directors"}</h2>
            <p className="mt-3 text-muted-foreground">
              {ml ? "സംഘത്തിന്റെ ലക്ഷ്യങ്ങളിലേക്ക് ഞങ്ങളെ നയിക്കുന്ന ബഹുമാനപ്പെട്ട ഭരണസമിതി അംഗങ്ങൾ:" : "Respected board members leading the organization toward its goals:"}
            </p>
          </div>

          <div className="mt-10 grid gap-3 lg:grid-cols-2 lg:max-w-5xl">
            {currentBoard.map((member, index) => (
              <article key={member.en} className={`overflow-hidden rounded-xl border bg-card shadow-card ${index === 0 ? "border-primary/30" : "border-border"}`}>
                <div className="p-2">
                  <div className="rounded-xl border border-border bg-muted p-2">
                    <div className="h-56 w-full flex items-center justify-center">
                      {member.photo ? (
                        <img src={member.photo} alt={member.name[lang]} className="max-h-full max-w-full object-contain object-center" />
                      ) : null}
                    </div>
                    <div className="mt-2 rounded-lg bg-background/95 px-2 py-2 text-center shadow-sm border border-border">
                      <div className="text-xs font-semibold text-primary">{member.role[lang]}</div>
                      <div className="mt-1 text-sm font-bold text-foreground">{member.name[lang]}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{ml ? "ഡയറക്ടർമാർ" : "Directors"}</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">{ml ? "ഡയറക്ടർമാർ" : "Directors"}</h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {directors.map((member) => (
                <div key={member.en} className="rounded-2xl border border-border bg-card p-4 shadow-card">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted p-3 flex items-center justify-center">
                    {member.photo ? <img src={member.photo} alt={member.name[lang]} className="max-h-full max-w-full object-contain object-center" /> : null}
                </div>
                  <h3 className="mt-4 text-lg font-bold">{member.name[lang]}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{member.role[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{ml ? "ഔദ്യോഗിക ജീവനക്കാർ" : "Our Staff"}</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">{ml ? "ഔദ്യോഗിക ജീവനക്കാർ" : "Our Staff"}</h2>
            <p className="mt-3 text-muted-foreground">
              {ml ? "അംഗങ്ങൾക്ക് കൃത്യവും സുതാര്യവുമായ സേവനങ്ങൾ ദൈനംദിനം ലഭ്യമാക്കുന്ന ഞങ്ങളുടെ ജീവനക്കാർ:" : "Our staff ensure accurate and transparent daily service for members:"}
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
              {staff.map((member) => (
                <article key={member.en} className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                <div className="aspect-[4/3] bg-muted p-3 flex items-center justify-center">
                  {member.photo ? <img src={member.photo} alt={member.name[lang]} className="max-h-full max-w-full object-contain object-center" /> : null}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name[lang]}</h3>
                  <p className="mt-2 text-muted-foreground">{member.role[lang]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{ml ? "മുൻകാല നേതൃത്വം" : "Our Heritage & Past Leaders"}</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">{ml ? "മുൻകാല നേതൃത്വം" : "Our Heritage & Past Leaders"}</h2>
            <p className="mt-3 text-muted-foreground">
              {ml
                ? "ഈ സ്ഥാപനത്തിന്റെ അടിത്തറ പാകുന്നതിന് സഹായിച്ച മുൻകാല ഭാരവാഹികളെയും പ്രമോട്ടർമാരെയും ഞങ്ങൾ കൃതജ്ഞതയോടെ സ്മരിക്കുന്നു."
                : "We gratefully remember the earlier leaders and promoters who helped build the foundation of this institution."}
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {heritageSections.map((section) => (
              <div key={section.title.en} className="rounded-3xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
                    <section.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold">{section.title[lang]}</h3>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {section.items.map((item) => (
                    <div key={item.en} className="overflow-hidden rounded-2xl border border-border bg-background">
                      {item.photo ? <img src={item.photo} alt={item.name ? item.name[lang] : item[lang]} className="h-44 w-full object-contain object-center bg-muted p-3" /> : null}
                      <div className="p-4">
                        <div className="text-base font-semibold text-foreground">{item.name ? item.name[lang] : item[lang]}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
