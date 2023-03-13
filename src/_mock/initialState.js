import { v4 } from "uuid";

export const initialState = [
	{
		todo: {
			title: "Новые",
			id:1,
			items: [
				{
					id: v4(),
					jobTitle: "UI/UX дизайнер",
					department: "Отдел разработки мобильного",
					status: 1,
					vacancies: 3,
					applicants: 182,
					recruiter: {
						id: 1,
						fullname: "Алексей Щербаков",
						profilePicture: "https://etimg.etb2bimg.com/photo/88157028.cms",
					},
				},
				{
					id: v4(),
					jobTitle: "Маркетолог",
					department: "Отдел маркетинга",
					status: 1,
					vacancies: 2,
					applicants: 182,
					recruiter: {
						id: 2,
						fullname: "Theresa Webb",
						profilePicture:
							"https://www.shutterstock.com/image-photo/business-portrait-young-beautiful-woman-260nw-1685957182.jpg",
					},
				},
				{
					id: v4(),
					jobTitle: "UI/UX дизайнер",
					department: "Отдел разработки мобильного",
					status: 1,
					vacancies: 2,
					applicants: 182,
					recruiter: {
						id: 3,
						fullname: "Vanessa Johnson",
						profilePicture:
							"https://thumbs.dreamstime.com/b/portrait-attractive-cheerful-experienced-girl-hr-secretary-assistant-isolated-over-grey-pastel-color-background-238511321.jpg",
					},
				},
			],
		},
		current: {
			title: "Текущие",
			id:2,
			items: [
				{
					id: v4(),
					jobTitle: "PHP Developer",
					department: "Housekeepers",
					status: 1,
					vacancies: 3,
					applicants: 182,
					recruiter: {
						id: 4,
						fullname: "Kristin Watson",
						profilePicture:
							"https://hr.ucsf.edu/sites/hr.ucsf.edu/files/styles/card_image/public/2022-04/suit_jordy-s-dtSaSlDob0c-unsplash.jpg?itok=i-Pdo38d",
					},
				},
				{
					id: v4(),
					jobTitle: "Freshers",
					department: "Finance",
					status: 2,
					vacancies: 2,
					applicants: 182,
					recruiter: {
						id: 5,
						fullname: "Jacob Jones",
						profilePicture:
							"https://thumbs.dreamstime.com/b/recruitment-concept-friendly-male-hr-manager-sitting-workplace-modern-office-smiling-camera-free-space-194868827.jpg",
					},
				},
				{
					id: v4(),
					jobTitle: "UI/UX дизайнер",
					department: "Отдел разработки мобильного",
					status: 1,
					vacancies: 3,
					applicants: 182,
					recruiter: {
						id: 2,
						fullname: "Vanessa Johnson",
						profilePicture:
							"https://www.shutterstock.com/image-photo/portrait-smiling-millennial-businesswoman-holding-260nw-1183089442.jpg",
					},
				},
			],
		},
		archive: {
			title: "Архив",
			id:3,
			items: [],
		},
		closed: {
			title: "Закрытые",
			id:4,
			items: [
				{
					id: v4(),
					jobTitle: "PHP Developer",
					department: "Housekeepers",
					status: 1,
					vacancies: 3,
					applicants: 182,
					recruiter: {
						id: 10,
						fullname: "Kristin Watson",
						profilePicture:
							"https://img.freepik.com/premium-photo/close-up-profile-side-view-portrait-her-she-nice-attractive-charming-content-girl-nerd-geek-expert-hr-insurance-consultant-employer-isolated-bright-vivid-shine-vibrant-blue-color-background_274222-29439.jpg",
					},
				},
				{
					id: v4(),
					jobTitle: "Freshers",
					department: "Finance",
					status: 3,
					vacancies: 2,
					applicants: 182,
					recruiter: {
						id: 11,
						fullname: "Jacob Jones",
						profilePicture:
							"https://study.com/cimages/multimages/16/ca72e788-a3fa-40fa-baa7-8a0408e279ed_adobestock_70694601.png",
					},
				},
				{
					id: v4(),
					jobTitle: "UI/UX дизайнер",
					department: "Отдел разработки мобильного",
					status: 3,
					vacancies: 3,
					applicants: 182,
					recruiter: {
						id: 12,
						fullname: "Vanessa Johnson",
						profilePicture:
							"https://www.shutterstock.com/image-photo/smiling-businesswoman-looking-camera-make-260nw-1793768593.jpg",
					},
				},
			],
		},
	},
];
