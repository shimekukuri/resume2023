import Observer from '../../../utilities/components/Observer';
import styles from './skills.module.css';

export default function Skills() {
  return (
    <div className="flex flex-col justify-between gap-24 mt-24 px-4 overflow-x-clip">
      <Observer className="justify-end min-h-[50vh]">
        <div
          className={`-translate-x-full opacity-0 slideIn w-11/12 ${styles.custombg2} ${styles.glow1} rounded-xl @container flex shadow-2xl overflow-x-clip`}
        >
          <div className="flex-1 @[720px]:grid grid-cols-5 flex flex-col">
            <div className="@[720px]:rounded-l-2xl col-span-2 p-4 bg-slate-500/[0.3]">
              Typescript
            </div>
          </div>
        </div>
      </Observer>
      <Observer className="min-h-[50vh]">
        <div
          className={`translate-x-full opacity-0 slideIn w-11/12 ${styles.custombg2} ${styles.glow1} rounded-xl @container flex shadow-2xl flex-1`}
        >
          React
        </div>
      </Observer>
      <Observer className="justify-end min-h-[50vh]">
        <div
          className={`-translate-x-full opacity-0 slideIn w-11/12 ${styles.custombg2} ${styles.glow1} rounded-xl @container flex shadow-2xl overflow-x-clip`}
        >
          <div className="flex-1 @[720px]:grid grid-cols-5 flex flex-col">
            <div className="@[720px]:rounded-l-2xl col-span-2 p-4 bg-slate-500/[0.3]">
              Vite
            </div>
          </div>
        </div>
      </Observer>
      <Observer className="min-h-[50vh]">
        <div
          className={`translate-x-full opacity-0 slideIn w-11/12 ${styles.custombg2} ${styles.glow1} rounded-xl @container flex shadow-2xl flex-1`}
        >
          Next
        </div>
      </Observer>
      <Observer className="justify-end min-h-[50vh]">
        <div
          className={`-translate-x-full opacity-0 slideIn w-11/12 ${styles.custombg2} ${styles.glow1} rounded-xl @container flex shadow-2xl overflow-x-clip`}
        >
          <div className="flex-1 @[720px]:grid grid-cols-5 flex flex-col">
            <div className="@[720px]:rounded-l-2xl col-span-2 p-4 bg-slate-500/[0.3]">
              Tailwind
            </div>
          </div>
        </div>
      </Observer>
      <Observer className="min-h-[50vh]">
        <div
          className={`translate-x-full opacity-0 slideIn w-11/12 ${styles.custombg2} ${styles.glow1} rounded-xl @container flex shadow-2xl flex-1`}
        >
          Node
        </div>
      </Observer>
      <Observer className="justify-end min-h-[50vh]">
        <div
          className={`-translate-x-full opacity-0 slideIn w-11/12 ${styles.custombg2} ${styles.glow1} rounded-xl @container flex shadow-2xl overflow-x-clip`}
        >
          <div className="flex-1 @[720px]:grid grid-cols-5 flex flex-col">
            <div className="@[720px]:rounded-l-2xl col-span-2 p-4 bg-slate-500/[0.3]">
              Prisma
            </div>
          </div>
        </div>
      </Observer>
      <Observer className="min-h-[50vh]">
        <div
          className={`translate-x-full opacity-0 slideIn w-11/12 ${styles.custombg2} ${styles.glow1} rounded-xl @container flex shadow-2xl flex-1`}
        >
          Rust
        </div>
      </Observer>

      {/* <div className="h-screen overflow-x-clip">
        <div className="parent-flex flex-1 flex flex-col justify-between  px-4 gap-24">
          <Observer>
            <div
              className={`-translate-x-full opacity-0 slideIn-200 flex-1 w-5/6 ml-4 md:ml-52 ${styles.custombg4} ${styles.glow4} shadow-2xl`}
            >
              Next
            </div>
          </Observer>
          <Observer>
            <div
              className={`translate-x-full opacity-0 slideIn-200 flex-1 w-5/6 self-end mr-4 md:mr-5 h-full ${styles.custombg5} ${styles.glow5} shadow-2xl`}
            >
              Vite
            </div>
          </Observer>
        </div>
      </div>
      <div className="h-screen overflow-x-clip mt-24">
        <div className="parent-flex flex-1 flex flex-col justify-between  px-4 gap-24">
          <Observer>
            <div
              className={`-translate-x-full opacity-0 slideIn-200 flex-1 w-5/6 ml-4 md:ml-52 bg-blue-200 ${styles.custombg6} ${styles.glow6} shadow-2xl`}
            >
              Prisma
            </div>
          </Observer>
          <Observer>
            <div
              className={`translate-x-full opacity-0 slideIn-200 flex-1 w-5/6 self-end mr-4 md:mr-52 h-full ${styles.custombg1}`}
            >
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
      </div> */}
    </div>
  );
}
