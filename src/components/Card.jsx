export default function CardComponent({ title, description, image }) {
    return (
        <div className="flex-col sm:flex-row flex items-center text-center sm:text-left">
            <img className="w-72 object-cover object-center flex-none text-center overflow-hidden shadow-lg" src={image} alt="" />
            <div className="bg-white py-4 sm:p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl flex text-center sm:text-left items-center">
                        <hr className="hidden sm:block w-12 h-0.5 my-8 bg-gray-500 border-0 rounded-lg" />
                        <span className="px-3 w-full">{title}</span>
                    </div>
                    <p className="text-gray-700 text-lg md:max-w-[80%]">{description}</p>
                </div>
            </div>
        </div>
    );
  }