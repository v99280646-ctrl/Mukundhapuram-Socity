import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as useT } from "./i18n-Co7DQvD3.mjs";
import { M as CalendarDays, k as ChevronDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-year-aONZ1kmH.js
var import_jsx_runtime = require_jsx_runtime();
var designationOrder = {
	"President": 1,
	"Vice President": 2,
	"Director": 3,
	"Secretary": 4,
	"Senior Clerk": 5,
	"Junior Clerk": 6,
	"Chief Promoter": 7,
	"Promoter": 8
};
function sortByDesignation(a, b) {
	return (designationOrder[a.designation] ?? 99) - (designationOrder[b.designation] ?? 99);
}
function sectionOrder(designation) {
	if (designation === "President" || designation === "Vice President") return 1;
	if (designation === "Director") return 2;
	return 3;
}
var img = {
	manoj: "https://www.image2url.com/r2/default/images/1781948696617-80e6af19-ea8d-4c3c-951a-b7a76a3a8cb1.jpg",
	dinesh: "https://www.image2url.com/r2/default/images/1781948795475-4b5d62dc-ae66-4dda-a0eb-4ba1f7bd2b61.jpg",
	ravindran: "https://www.image2url.com/r2/default/images/1781948878285-6c149109-48a3-4775-8b6c-ee70f88d2a5d.jpg",
	sekharan: "https://www.image2url.com/r2/default/images/1781949256931-361cd9a5-6289-4d72-b6c6-adb6cd55a274.jpg",
	ramachandran: "https://www.image2url.com/r2/default/images/1782893908370-ada15d6d-567e-4d02-bbf8-9d4fa9a7443f.jpeg",
	kannan: "https://www.image2url.com/r2/default/images/1781949151388-9ac5d6e3-26aa-4079-8a7d-1d7279506d08.jpg",
	mani: "https://www.image2url.com/r2/default/images/1781949196402-67bc9967-54ec-45a2-a5fd-66db70f38035.jpg",
	shobha: "https://www.image2url.com/r2/default/images/1781948925822-f64410fb-7e2b-4769-9c4e-3f43f5ccc052.png",
	raji: "https://www.image2url.com/r2/default/images/1781949019357-dba08af2-6b4c-4cc9-bac8-50a54fca1ee6.jpg",
	jayasree: "https://www.image2url.com/r2/default/images/1781949092895-ca33c370-e2b4-4b3a-bef7-2d10676fadc5.jpg",
	priya: "https://www.image2url.com/r2/default/images/1782901783514-83e02137-adab-4645-b994-7a2e459b4b28.jpg",
	nithu: "https://www.image2url.com/r2/default/images/1782901637227-baa2125e-dbf0-42c8-8b92-0de18ab8c09c.jpeg",
	shalini: "https://www.image2url.com/r2/default/images/1782901573693-a4921fdb-1cb5-47ff-a1ea-e65485dda397.jpeg",
	kallur: "https://www.image2url.com/r2/default/images/1781950079207-3a2184a3-7bc3-4421-af7e-caa64c92ec0d.jpeg",
	shashi: "https://www.image2url.com/r2/default/images/1781950531679-859bd98a-8fc6-4771-a838-3c5634eb6620.png",
	soumya: "https://www.image2url.com/r2/default/images/1782975646885-d19e7f15-5209-4dc2-a7a4-ff9d026ddf7c.png",
	adv: "https://www.image2url.com/r2/default/images/1782893780427-25bf6c24-d62c-42be-a1e0-e2c7d0229251.jpeg",
	cchandrasekhar: "https://www.image2url.com/r2/default/images/1782893851437-e45b1093-8083-4ea9-a437-ef2a040c7a4d.jpeg",
	praveen: "https://www.image2url.com/r2/default/images/1781950531679-859bd98a-8fc6-4771-a838-3c5634eb6620.png",
	kbsreedharan: "https://www.image2url.com/r2/default/images/1781950531679-859bd98a-8fc6-4771-a838-3c5634eb6620.png",
	mpajith: "https://www.image2url.com/r2/default/images/1781950531679-859bd98a-8fc6-4771-a838-3c5634eb6620.png",
	mpsuresh: "https://www.image2url.com/r2/default/images/1781950027301-23c0d982-f4a1-4616-8eac-44d7b607b203.jpeg"
};
var yearGroups = [
	{
		period: "2022 - 2027",
		title: "Current Board",
		members: [
			{
				name: "K. Manoj",
				designation: "President",
				photo: img.manoj
			},
			{
				name: "K. Dinesh Kumar",
				designation: "Vice President",
				photo: img.dinesh
			},
			{
				name: "K. Ravindran",
				designation: "Director",
				photo: img.ravindran
			},
			{
				name: "K. Sekharan",
				designation: "Director",
				photo: img.sekharan
			},
			{
				name: "Ramachandran Menon. P",
				designation: "Director",
				photo: img.ramachandran
			},
			{
				name: "Kannan. V. S",
				designation: "Director",
				photo: img.kannan
			},
			{
				name: "Mani Menon. T",
				designation: "Director",
				photo: img.mani
			},
			{
				name: "Shobha P. Menon",
				designation: "Director",
				photo: img.shobha
			},
			{
				name: "Raji Suresh",
				designation: "Director",
				photo: img.raji
			},
			{
				name: "Jayasree T. G",
				designation: "Director",
				photo: img.jayasree
			},
			{
				name: "Priya K.",
				designation: "Secretary",
				photo: img.priya
			},
			{
				name: "Nithu P. N.",
				designation: "Senior Clerk",
				photo: img.nithu
			},
			{
				name: "Shalini T. R.",
				designation: "Junior Clerk",
				photo: img.shalini
			}
		].sort(sortByDesignation)
	},
	{
		period: "2019 - 2022",
		members: [
			{
				name: "Manoj Kallikkattil",
				designation: "President",
				photo: img.manoj
			},
			{
				name: "Sreedeevi Nandakumar",
				designation: "Vice President",
				photo: img.adv
			},
			{
				name: "M. Suresh",
				designation: "Director",
				photo: img.mpsuresh
			},
			{
				name: "Praveen Kumar",
				designation: "Director",
				photo: img.praveen
			},
			{
				name: "K. Sekharan",
				designation: "Director",
				photo: img.sekharan
			},
			{
				name: "K. Dinesh Kumar",
				designation: "Director",
				photo: img.dinesh
			},
			{
				name: "Raji Suresh",
				designation: "Director",
				photo: img.raji
			},
			{
				name: "Mini Damodaran",
				designation: "Director",
				photo: img.soumya
			},
			{
				name: "Ramachandran Menon. P",
				designation: "Director",
				photo: img.ramachandran
			},
			{
				name: "K. B. Sreedharan",
				designation: "Director",
				photo: img.kbsreedharan
			}
		].sort(sortByDesignation)
	},
	{
		period: "2018 - 2022",
		members: [{
			name: "Manoj Kallikkattil",
			designation: "President",
			photo: img.manoj
		}, {
			name: "Sreedeevi Nandakumar",
			designation: "Vice President",
			photo: img.adv
		}].sort(sortByDesignation)
	},
	{
		period: "2017 - 2022",
		members: [
			{
				name: "C. Chandrasekhar Menon",
				designation: "President",
				photo: img.cchandrasekhar
			},
			{
				name: "Manoj Kallikkattil",
				designation: "Vice President",
				photo: img.manoj
			},
			{
				name: "M. P. Ajith Kumar",
				designation: "Director",
				photo: img.mpajith
			},
			{
				name: "Kallur Babu",
				designation: "Director",
				photo: img.kallur
			},
			{
				name: "M. Suresh",
				designation: "Director",
				photo: img.mpsuresh
			},
			{
				name: "Praveen Kumar",
				designation: "Director",
				photo: img.praveen
			},
			{
				name: "K. Sekharan",
				designation: "Director",
				photo: img.sekharan
			},
			{
				name: "Sreedeevi Nandakumar",
				designation: "Director",
				photo: img.adv
			},
			{
				name: "Raji Suresh",
				designation: "Director",
				photo: img.raji
			},
			{
				name: "Mini Damodaran",
				designation: "Director",
				photo: img.soumya
			}
		].sort(sortByDesignation)
	},
	{
		period: "2015 - 2016",
		title: "Administrative Committee",
		members: [
			{
				name: "Kallur Babu",
				designation: "President",
				photo: img.kallur
			},
			{
				name: "K. Sekharan",
				designation: "Director",
				photo: img.sekharan
			},
			{
				name: "Sreedeevi Nandakumar",
				designation: "Director",
				photo: img.adv
			}
		].sort(sortByDesignation)
	},
	{
		period: "2014 - 2015",
		members: [
			{
				name: "Shashi Chakramath",
				designation: "President",
				photo: img.shashi
			},
			{
				name: "Soumya Menon",
				designation: "Director",
				photo: img.soumya
			},
			{
				name: "Adv. D. Shankaran Kutty",
				designation: "Director",
				photo: img.praveen
			},
			{
				name: "M. P. Ajith Kumar",
				designation: "Director",
				photo: img.mpajith
			},
			{
				name: "A. Unnikrishnan",
				designation: "Director",
				photo: img.praveen
			},
			{
				name: "K. Sekharan",
				designation: "Director",
				photo: img.sekharan
			},
			{
				name: "M. Suresh",
				designation: "Director",
				photo: img.mpsuresh
			},
			{
				name: "K. B. Sreedharan",
				designation: "Director",
				photo: img.kbsreedharan
			},
			{
				name: "Sreedeevi Nandakumar",
				designation: "Director",
				photo: img.adv
			},
			{
				name: "Mini T. K.",
				designation: "Director",
				photo: img.soumya
			},
			{
				name: "Sumathi K. K.",
				designation: "Director",
				photo: img.soumya
			},
			{
				name: "Praveen Kumar",
				designation: "Director",
				photo: img.praveen
			}
		].sort(sortByDesignation)
	},
	{
		period: "2014",
		members: [
			{
				name: "Shashi Chakramath",
				designation: "President",
				photo: img.shashi
			},
			{
				name: "Kallur Babu",
				designation: "Secretary",
				photo: img.kallur
			},
			{
				name: "M. P. Ajith Kumar",
				designation: "Director",
				photo: img.mpajith
			},
			{
				name: "R. Balakrishnan",
				designation: "Director",
				photo: img.praveen
			},
			{
				name: "M. Suresh",
				designation: "Director",
				photo: img.mpsuresh
			},
			{
				name: "Adv. T. Shankaran Kutty",
				designation: "Director",
				photo: img.praveen
			},
			{
				name: "K. Sekharan",
				designation: "Director",
				photo: img.sekharan
			},
			{
				name: "Sini Suresh",
				designation: "Director",
				photo: img.soumya
			},
			{
				name: "Shailaja Radhakrishnan",
				designation: "Director",
				photo: img.soumya
			},
			{
				name: "Bindu Prakash",
				designation: "Director",
				photo: img.soumya
			},
			{
				name: "S. Unnikrishnan",
				designation: "Director",
				photo: img.soumya
			}
		].sort(sortByDesignation)
	}
];
function TeamYearPage() {
	const { lang } = useT();
	const ml = lang === "ml";
	const labels = {
		title: ml ? "ഒരുമിച്ച്, നമുക്ക് സാമ്പത്തിക ആത്മവിശ്വാസം വളർത്താം" : "Together We Build Financial Confidence",
		desc: ml ? "ഞങ്ങളുടെ ടീമിന്റെ പ്രൊഫഷണൽ വൈദഗ്ധ്യവും കമ്മ്യൂണിറ്റിക്ക് മുൻഗണന നൽകുന്ന സമീപനവും ഒത്തുചേരുമ്പോൾ, ഓരോ അംഗത്തിനും സുതാര്യമായ മാർഗ്ഗനിർദ്ദേശവും ഉടനടിയുള്ള സേവനവും അവരുടെ ആവശ്യങ്ങൾക്കനുസൃതമായ സാമ്പത്തിക പരിഹാരങ്ങളും ലഭിക്കുന്നു എന്ന് ഞങ്ങൾ ഉറപ്പുവരുത്തുന്നു." : "Our team combines professional expertise with a community-first approach, ensuring every member receives honest guidance, responsive service, and financial solutions tailored to their needs.",
		currentBoard: ml ? "നിലവിലെ ഭരണസമിതി" : "Current Board",
		adminCommittee: ml ? "ഭരണസമിതി" : "Administrative Committee",
		leadership: ml ? "പ്രസിഡന്റും വൈസ് പ്രസിഡന്റും" : "President & Vice President",
		directors: ml ? "ഡയറക്ടർമാർ" : "Directors",
		others: ml ? "മറ്റുള്ളവർ" : "Other Members",
		designation: {
			President: ml ? "പ്രസിഡന്റ്" : "President",
			"Vice President": ml ? "വൈസ് പ്രസിഡന്റ്" : "Vice President",
			Director: ml ? "ഡയറക്ടർ" : "Director",
			Secretary: ml ? "സെക്രട്ടറി" : "Secretary",
			"Senior Clerk": ml ? "സീനിയർ ക്ലർക്ക്" : "Senior Clerk",
			"Junior Clerk": ml ? "ജൂനിയർ ക്ലർക്ക്" : "Junior Clerk",
			"Chief Promoter": ml ? "ചീഫ് പ്രമോട്ടർ" : "Chief Promoter",
			Promoter: ml ? "പ്രമോട്ടർ" : "Promoter"
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-gradient-primary text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-20 pointer-events-none",
			style: {
				backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)",
				backgroundSize: "32px 32px"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 py-14 sm:py-16 md:py-24 relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-10 lg:grid-cols-[1.4fr_0.9fr] items-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80",
							children: labels.badge
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-4xl md:text-6xl font-black leading-[1.05] tracking-tight",
							children: labels.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-lg md:text-xl leading-relaxed text-primary-foreground/90",
							children: labels.desc
						})
					]
				})
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-4",
				children: yearGroups.map((group, index) => {
					const leadership = group.members.filter((m) => sectionOrder(m.designation) === 1);
					const directors = group.members.filter((m) => sectionOrder(m.designation) === 2);
					const others = group.members.filter((m) => sectionOrder(m.designation) === 3);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group rounded-xl border border-border bg-card shadow-card overflow-hidden",
						open: index === 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-10 w-10 rounded-lg bg-gold/15 text-gold grid place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 18 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-lg font-bold",
									children: group.period
								}), group.title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: group.title === "Current Board" ? labels.currentBoard : labels.adminCommittee
								}) : null] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								className: "shrink-0 transition-transform duration-200 group-open:rotate-180",
								size: 18
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-border px-5 py-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearSection, {
										title: labels.leadership,
										people: leadership,
										columnsClass: "lg:grid-cols-3",
										period: group.period,
										compact: true,
										designationLabels: labels.designation
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearSection, {
										title: labels.directors,
										people: directors,
										columnsClass: "lg:grid-cols-4",
										period: group.period,
										designationLabels: labels.designation
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearSection, {
										title: labels.others,
										people: others,
										columnsClass: "lg:grid-cols-3",
										period: group.period,
										designationLabels: labels.designation
									})
								]
							})
						})]
					}, group.period);
				})
			})
		})
	})] });
}
function YearSection({ title, people, columnsClass, period, compact = false, designationLabels }) {
	if (!people.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `mt-3 grid gap-4 sm:grid-cols-2 ${columnsClass}`,
		children: people.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: `rounded-xl border border-border bg-background ${compact ? "p-3" : "p-4"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `rounded-lg bg-muted p-3 flex items-center justify-center ${compact ? "aspect-[16/9]" : "aspect-[4/3]"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: person.photo,
						alt: person.name,
						className: "max-h-full max-w-full object-contain object-center"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: `mt-4 font-bold ${compact ? "text-sm" : "text-base"}`,
					children: person.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-1 text-sm text-muted-foreground ${compact ? "text-xs" : ""}`,
					children: designationLabels[person.designation] ?? person.designation
				})
			]
		}, `${period}-${person.name}`))
	})] });
}
//#endregion
export { TeamYearPage as component };
