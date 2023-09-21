import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const rapidKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/', 
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '62abb1ed5emsh33f5edced959155p138546jsnc23bcda760fc')
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')
            return headers
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi