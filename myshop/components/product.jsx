export default function Product(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white items-center p-8 md:p-16 mx-10 rounded-3xl">
            {/** left side */}
            <div className="flex flex-col md:text-left gap-4">
                <p className="text-sm text-[#6C19FF] font-semibold">TARGET AUDIENCE</p>
                <h1 className="text-4xl md:text-6xl font-semibold">Product Users</h1>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore cumque tenetur est 
                    ipsum sapiente, officia mollitia recusandae delectus amet dignissimos necessitatibus repudiandae 
                    autem consectetur sed impedit excepturi minus possimus!
                </p>
            </div>
            {/** right side */}
            <div className="flex justify-center items-center max-w-sm border border-black border-dashed md:text-right  min-w-0 aspect-square rounded-2xl">
                Product Image
            </div>
        </div>
    )
}