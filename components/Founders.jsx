import Image from "next/image";
import React from "react";

const Founders = () => {
	return (
		<section className="flex flex-col justify-center items-center mx-auto p-8 lg:py-24 gap-4">
			<div className="flex justify-center items-center gap-8 w-full lg:w-1/2">
				<div className="w-1/3 border-2 border-black"></div>
				<p className="font-black whitespace-nowrap uppercase ">Fundatorzy</p>
			</div>
			<h6 className="font-black text-6xl text-end">Główni Fundatorzy</h6>
			<div className="flex flex-wrap gap-24 items-center justify-center pt-12">
				<a
					href="https://merkury-medica.pl/"
					className="w-[23rem]"
				>
					<Image
						width={800}
						height={800}
						src="/img/MerkuryLogo.png"
						alt="Merkury Medica"
						className="object-contain w-[23rem]"
					/>
				</a>
				<a
					href="https://www.silesiaspace.co/"
					className="w-[23rem]"
				>
					<Image
						width={800}
						height={800}
						src="/img/SilesiaLogo.png"
						alt="Merkury Medica"
						className="object-contain w-[23rem]"
					/>
				</a>
			</div>
		</section>
	);
};

export default Founders;
