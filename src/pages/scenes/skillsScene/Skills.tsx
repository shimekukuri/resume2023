import Observer from '../../../utilities/components/Observer';

export default function Skills() {
  return (
    <>
      <div className="h-screen pt-4 pb-4 overflow-y-scroll overflow-x-clip">
        <Observer>
          <div className="parent-flex flex-1 flex flex-col justify-between gap-4">
            <div className="-translate-x-full opacity-0 slideIn-400 flex-1 w-5/6 ml-4 md:ml-16 bg-blue-200">
              TS
            </div>
            <div className="translate-x-full opacity-0 slideIn-600 flex-1 w-5/6 self-end mr-4 md:mr-16 bg-red-200">
              React
            </div>
          </div>
        </Observer>
      </div>
      <div className="-translate-x-full opacity-0 slideIn-600">Next</div>
      <div className="-translate-x-full opacity-0 slideIn-800">Vite</div>
      <div className="-translate-x-full opacity-0 slideIn-1000">Prisma</div>
      <div className="-translate-x-full opacity-0 slideIn-200">Node</div>
      <div className="-translate-x-full opacity-0 slideIn-200">Rust</div>
    </>
  );
}
