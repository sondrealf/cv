import React from "react"
import Content from "../components/Content"
import Info from "../components/Info"
import InfoProvider from "../components/info-context"
import Layout from "../components/Layout"
import Profile from "../components/Profile"

const index = () => {
  return (
    <InfoProvider>
      <Layout className="grid grid-rows-[22.5rem_repeat(3,minmax(8.625rem,_1fr))] print:grid-cols-[repeat(6,minmax(8.625rem,_1fr))] lg:grid-cols-[repeat(7,minmax(8.625rem,_1fr))] grid-cols-[repeat(2,minmax(2.625rem,_1fr))] w-full">
        <Profile className="bg-gray-200 col-span-2 row-span-1" />
        <Info className="bg-gray-100 col-span-2 row-start-2 row-span-3 p-4" />
        <Content className=" col-span-2 sm:col-span-5 print:col-span-6 row-span-4 p-4" />
      </Layout>
    </InfoProvider>
  )
}

export default index
