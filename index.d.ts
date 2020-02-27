/**
 * Pave the path to ensure it exists
 * @param path
 * @returns A promise solved on success
 */
declare function pavePath(path: string): Promise<void>;

export = pavePath;
