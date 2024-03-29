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

  it('should handle Windows-like paths as well', () => {
    expect(join('/mnt', 'c', 'Users', 'Documents', 'file.txt')).toBe('/mnt/c/Users/Documents/file.txt')
  })
})
