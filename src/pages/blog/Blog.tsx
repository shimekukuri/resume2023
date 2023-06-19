export default function Blog() {
  return (
    <div className="@container flex h-screen max-h-screen relative">
      <input
        id="navid"
        className="peer/navid cursor-pointer absolute bottom-5 @[720px]:top-0 right-4 z-10"
        type="checkbox"
      />
      <div className="absolute bottom-0 @[720px]:top-0 h-16  w-full backdrop-blur-md peer-checked/navid:bg-blue-100 bg-opacity-10 peer-checked/navid:animate-height-screen">
        Nav
      </div>
      <div className="absolute hidden bottom-0 right-0 left-0 top-0 backdrop-blur-sm peer-checked/navid:flex p-4 md:p-56">
        <div className="flex-1 border-2 border-white bg-white bg-opacity-50 rounded-lg  shadow-2xl backdrop-blur-xl"></div>
      </div>
      <div className="flex flex-col flex-1 gap-4 bg-green-100 overflow-y-scroll min-h-max">
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>

        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
        <div className="h-16 bg-red-200">test</div>
      </div>
    </div>
  );
}

//create a container and within each container assign a number of posts to be renedered to the screen for mobile simply load all the elements in one
//col, for full sized screens snap scroll to each individual element.
