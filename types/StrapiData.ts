export type StrapiCollection = {
    data: {
        id: number
        attributes: {
            createdAt: string
            updatedAt: string
            publishedAt: string
        }
    }[],
    meta: {
        pagination: {
            page: number
            pageSize: number
            pageCount: number
            total: number
        }
    }
}