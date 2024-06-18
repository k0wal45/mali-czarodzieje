import Decoration from "@/components/Decoration";
import Contact from "@/components/Contact";
import Mapa from "@/components/Mapa";
import Link from "next/link";
import Data from "@/components/Data";
import { redirect } from "next/navigation";
import Image from "next/image";

export const revalidate = 3600;

const Event = async ({ params }) => {
	const getDate = (date) => {
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();

		const formattedDay = day < 10 ? `0${day}` : day;
		const formattedMonth = month < 10 ? `0${month}` : month;

		return `${formattedDay}-${formattedMonth}-${year}`;
	};

	async function findObjectBySlug(slug, array) {
		const currentPage = array.find((item) => item.slug === slug);

		if (!currentPage) {
			return false;
		}

		return currentPage;
	}

	const pageData = await findObjectBySlug(params.slug, Data);

	console.log(pageData);

	// return (!pageData ? redirect('/not-found') :

	return (
		<main className="max-w-screen overflow-x-hidden">
			<section className="relative flex flex-col lg:flex-row gap-8 justify-center items-center p-4 py-32 text-white z-20">
				<Image
					width={1080}
					height={1000}
					src={"/img/mikolajoweRozdanie/" + pageData.photo[0]}
					alt="Akcja Mali Czarodzieje"
					className="absolute w-full h-full -z-10 object-cover top-0 left-0"
				/>
				<div className="absolute w-full h-full -z-[5] bg-black bg-opacity-50 top-0 left-0"></div>
				<div className="flex flex-col gap-2 justify-start items-start lg:max-w-[50vw]">
					<div className="flex justify-start items-start gap-8 border-b-2 p-2">
						<p className="text-xl lg:text-2xl">{getDate(pageData.date)}</p>
						<p className="text-xl lg:text-2xl">{pageData.place}</p>
					</div>
					<h1 className="text-5xl lg:text-8xl font-bold pb-8">
						{pageData.title}
					</h1>
					<p className="text-xl lg:text-2xl lg:w-2/3">
						{pageData.shortDescription}
					</p>

					<div className="flex justify-start lg:justify-center items-start gap-8 flex-wrap my-8">
						<Link
							href="/kontakt"
							className="btn rounded-full text-xl font-bold"
						>
							Skontaktuj się z nami
						</Link>
						<Link
							href="/"
							className="btn btn-outline border-white rounded-full text-white text-xl font-bold"
						>
							Wróć na stronę główną
						</Link>
					</div>
				</div>
				<div className=" w-[10vw]"></div>
			</section>

			<Decoration
				photo={pageData.photo[1]}
				title="Opis Akcji"
				text={pageData.description}
			/>

			<section className="flex flex-col justify-center items-center p-4 mx-auto">
				<h3 className="text-5xl font-black py-12">
					Zobacz zdjęcia z akcji "
					<span className="text-primary">{pageData.title}</span>"
				</h3>
				<ul className="columns-1 lg:columns-3 px-4 lg:px-16">
					{pageData.photo.map((photo) => (
						<li
							className="p-4"
							key={photo}
						>
							<img
								src={"/img/mikolajoweRozdanie/" + photo}
								alt="Zdjęcie z akcji Mali Czarodzieje"
							/>
						</li>
					))}
				</ul>
			</section>

			<Contact />
			<Mapa />
		</main>
	);
};

export default Event;
