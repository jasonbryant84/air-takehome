import { AssetType } from "@/redux/assetsSlice"
import { BoardType } from "@/redux/boardsSlice"

export const createAssetThumbnails = (items: AssetType[]) => {
    return items?.map((assetObj) => {
        console.log('assetObj', assetObj.assets?.image)
        return {
            id: assetObj.id,
            url: assetObj.assets?.image
        }
    })
}

export const createBoardThumbnails = (items: BoardType[]) => {
    return items?.map((boardObj) => {
        return {
            id: boardObj.id,
            url: boardObj.thumbnails?.length ? boardObj.thumbnails[0] : null
        }
    })
}
