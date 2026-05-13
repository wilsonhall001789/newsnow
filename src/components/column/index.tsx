import type { FixedColumnID } from "@shared/types"
import { useTitle } from "react-use"
import { NavBar } from "../navbar"
import { Dnd } from "./dnd"
import { currentColumnIDAtom } from "~/atoms"

export function Column({ id }: { id: FixedColumnID }) {
  const [currentColumnID, setCurrentColumnID] = useAtom(currentColumnIDAtom)
  useEffect(() => {
    setCurrentColumnID(id)
  }, [id, setCurrentColumnID])

// SEO 长标题映射
const titleMap = {
  hottest: "NewsNow | 最热新闻 - 全网实时热点聚合平台",
  realtime: "NewsNow | 实时资讯 - 全球热点新闻聚合阅读器",
  focus: "NewsNow | 我的关注 - 个性化新闻阅读平台",
}
useTitle(titleMap[id as keyof typeof titleMap])
  
  return (
    <>
      <div className="flex justify-center md:hidden mb-6">
        <NavBar />
      </div>
      {id === currentColumnID && <Dnd />}
    </>
  )
}
