interface Proposal {
    projectDetail: {
        projectId: string,
        status: number,
        professionName: string,
        district: string,
        detail: string,
        creationDate: string
    },
    statusProposal: number,
    proposal: string,
    profName: string,
    profLastName: string,
    profPublicUrl: string,
    minCost: number,
    maxCost: number
}

export default Proposal;