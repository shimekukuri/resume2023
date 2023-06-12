import Observer from '../../../utilities/components/Observer';
import styles from './skills.module.css';

export default function Skills() {
  return (
    <>
      <div className="h-screen mt-24 overflow-x-clip">
        <div className="parent-flex flex-1 flex flex-col justify-between gap-24 px-4">
          <Observer>
            <div
              className={`-translate-x-full opacity-0 slideIn flex-1 w-5/6 ml-4 md:ml-52 bg-blue-200 ${styles.glow1} rounded-xl @container flex`}
            >
              <div className="flex-1 @[720px]:grid grid-cols-5 flex flex-col">
                <div className="@[720px]:rounded-l-2xl col-span-2 p-4 bg-slate-500">
                  d
                </div>
              </div>
            </div>
          </Observer>
          <Observer>
            <div
              className={`translate-x-full opacity-0 slideIn-200 flex-1 w-5/6 self-end mr-4 md:mr-52 bg-red-200 h-full ${styles.glow2} rounded-xl`}
            >
              React
            </div>
          </Observer>
        </div>
      </div>
      <div className="h-screen overflow-y-scroll overflow-x-clip mt-24">
        <div className="parent-flex flex-1 flex flex-col justify-between  px-4 gap-24">
          <Observer>
            <div className="-translate-x-full opacity-0 slideIn-200 flex-1 w-5/6 ml-4 md:ml-52 bg-blue-200">
              Next
            </div>
          </Observer>
          <Observer>
            <div className="translate-x-full opacity-0 slideIn-200 flex-1 w-5/6 self-end mr-4 md:mr-52 bg-red-200 h-full">
              Vite
            </div>
          </Observer>
        </div>
      </div>
      <div className="h-screen overflow-y-scroll overflow-x-clip mt-24">
        <div className="parent-flex flex-1 flex flex-col justify-between  px-4 gap-24">
          <Observer>
            <div className="-translate-x-full opacity-0 slideIn-200 flex-1 w-5/6 ml-4 md:ml-52 bg-blue-200">
              Prisma
            </div>
          </Observer>
          <Observer>
            <div className="translate-x-full opacity-0 slideIn-200 flex-1 w-5/6 self-end mr-4 md:mr-52 bg-red-200 h-full">
              Node
            </div>
          </Observer>
        </div>
      </div>
      <div className="h-screen overflow-y-scroll overflow-x-clip mt-24">
        <div className="parent-flex flex-1 flex flex-col justify-between  px-4 gap-24">
          <Observer>
            <div className="-translate-x-full opacity-0 slideIn-200 flex-1 w-5/6 ml-4 md:ml-52 bg-blue-200">
              Tailwind
            </div>
          </Observer>
          <Observer>
            <div className="translate-x-full opacity-0 slideIn-200 flex-1 w-5/6 self-end mr-4 md:mr-52 bg-red-200 h-full">
              Rust
            </div>
          </Observer>
        </div>
      </div>
    </>
  );
}
