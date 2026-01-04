export default function Process(){
    return (
        <div className="flex flex-col justify-center bg-white border border-transparent shadow-sm rounded-3xl p-8 md:p-16 gap-8 mx-10">
            <h1 className="text-2xl md:text-4xl font-semibold text-center">Our Process</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col gap-6 md:text-left">
                    <li className="flex border py-5 px-2 shadow-md border-gray-300 rounded-lg text-start font-semibold">Emphathize</li>
                    <li className="flex border py-5 px-2 shadow-md border-gray-300 rounded-lg text-start font-semibold">Research</li>
                    <li className="flex border py-5 px-2 shadow-md border-gray-300 rounded-lg text-start font-semibold">Ideate</li>
                    <li className="flex border py-5 px-2 shadow-md border-gray-300 rounded-lg text-start font-semibold">Design</li>
                </div>
                <div className="flex justify-center items-center max-w-sm border border-black border-dashed md:text-right  min-w-0 aspect-square rounded-2xl">
                    Product Image
                </div>
            </div>
        </div>
    )
}