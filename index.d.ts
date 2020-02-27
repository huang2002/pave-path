/**
 * Pave the path to ensure it exists
 * (the base path must exist if given)
 * @param path
 * @param base
 * @returns A promise solved on success
 */
declare function pavePath(path: string, base?: string): Promise<void>;

export = pavePath;
