import { join } from '../src'

describe('join', () => {
  it('should join path segments using "/" separator and remove repetitive slashes', () => {
    expect(join('root', 'dir', 'file.png')).toBe('root/dir/file.png')
    expect(join('/root/', '/dir/', 'file.png')).toBe('/root/dir/file.png')
    expect(join('root', '', 'file.png')).toBe('root/file.png')
    expect(join('//root', 'dir//', '/file.png')).toBe('/root/dir/file.png')
    expect(join('/root///', '//dir/', 'file.png')).toBe('/root/dir/file.png')
    expect(join('root', 'dir', 'subdir', '', 'file.png')).toBe('root/dir/subdir/file.png')
    expect(join('root/', '/dir/', '/subdir/', '/file.png')).toBe('root/dir/subdir/file.png')
  })

  it('should return empty string if no arguments are provided', () => {
    expect(join()).toBe('')
  })

  it('should handle Windows-like paths as well', () => {
    expect(join('C:\\', 'User\\Documents\\', 'file.txt')).toBe('C:/User/Documents/file.txt')
    expect(join('C:\\\\', '\\\\Server', 'Share\\', 'file.txt')).toBe('C:/Server/Share/file.txt')
    expect(join('/mnt', 'c', 'Users', 'Documents', 'file.txt')).toBe('/mnt/c/Users/Documents/file.txt')
  })
})
