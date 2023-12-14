import { AssetType } from "@/redux/assetsSlice"
import { BoardType } from "@/redux/boardsSlice"

export const createAssetThumbnails = (items: any[]) => { // TODO: should be AssetType but type/build issues
    return items?.map((assetObj) => {
        const asset = assetObj.assets[0]
        return {
            id: assetObj.id,
            url: assetObj.assets.image
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
