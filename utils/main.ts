export async function readInputFromFile(filepath: string, numbers: boolean = false) {
    let fileContentsArray: any[] = [];
    const fileContents = Deno.readTextFile(filepath);
    await fileContents.then((response) => fileContentsArray = response.split('\n'))
    if (numbers) {
        fileContentsArray = fileContentsArray.map(Number)
    }
    return fileContentsArray;
}