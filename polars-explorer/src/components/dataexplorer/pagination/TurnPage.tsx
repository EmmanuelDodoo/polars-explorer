import {useAppSelector} from "@/redux/hooks.ts";
import {selectOpenedFrameViewKey} from "@/components/frameview/frameViewSlice.ts";
import {selectPageSize} from "@/components/dataexplorer/pagination/paginationSlice.ts";
import {turn_page} from "@/services/commands.ts";

export default function TurnPage({page}: { page: number }) {
    const [frameKey, viewKey] = useAppSelector(selectOpenedFrameViewKey);
    const pageSize = useAppSelector(selectPageSize);
    return (<button className="btn rounded-none" onClick={async () => {
        await turn_page({frameKey, viewKey, page, pageSize})
    }}>To Page</button>)
}