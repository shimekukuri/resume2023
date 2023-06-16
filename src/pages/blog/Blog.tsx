export default function Blog() {
  return (
    <div className="@container min-h-screen">
      {/* //when in large format nav at top via flex col vs flex col reverse */}
      <div className="@[480px]:flex @[480px]:flex-col-reverse">
        <nav>Nav</nav>
        <div>body</div>
      </div>
    </div>
  );
}

//create a container and within each container assign a number of posts to be renedered to the screen for mobile simply load all the elements in one
//col, for full sized screens snap scroll to each individual element.
