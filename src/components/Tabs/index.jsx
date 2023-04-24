import React, { useState } from "react";
import { useCurrentUserWatchlist } from "../../hooks/ListHooks";
import TabTitle from "./TabTitle";
import TabContent from "./TabContent";
import SlideButton from "../Shared/SlideButton";

function Tabs() {
  const [watched, unwatched] = useCurrentUserWatchlist();
  const [viewMode, setViewMode] = useState("list");
  const [activeTab, setActiveTab] = useState("watched");

  const toggleActiveTab = activeTab => setActiveTab(activeTab);

  return (
    <section>
      <header className='pt-5 capitalize text-slate-100'>
        <div className='flex items-center gap-2 py-4'>
          <TabTitle
            content='watched'
            active={activeTab}
            toggleActive={toggleActiveTab}
          />
          <TabTitle
            content='not watched'
            active={activeTab}
            toggleActive={toggleActiveTab}
          />
          {/* <div className='self-end bg-gradient-to-r from-orange-600 to-transparent h-px w-full'></div> */}

          <SlideButton
            id='view_mode_slider'
            leftText='list'
            rightText='grid'
            toggle={setViewMode}
            className='ml-auto hidden xs:block'
          />
        </div>
      </header>
      <div className='rounded-md bg-primary p-2 shadow-md shadow-[rgba(234,88,12,.2)]'>
        <TabContent
          data={activeTab === "watched" ? watched : unwatched}
          viewMode={viewMode}
        />
      </div>
      {/* <div className='self-end bg-gradient-to-r from-orange-600 to-transparent h-px w-full'></div> */}
    </section>
  );
}

export default Tabs;
