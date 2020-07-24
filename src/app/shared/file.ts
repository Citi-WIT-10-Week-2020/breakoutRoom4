
export interface IFile{
    id: string,
    course:string
	topic: string
	filename: string
	filetype:string
	fileDescription:string //url if available
	resourseGroup: string
	file: {
        bucket: string
        region:string
        key:string
    }
}