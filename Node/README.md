## Node 小记

### fs

* readdirSync(文件路径) 返回：数组，里面的文件名，包含文件夹名和文件名
* lstatSync 同步 lstat(). 返回 fs.Stats 的实例。
* Stats实例 意思是获取文件信息
* lstatSync().isDirectory 是目录的话，返回true，否则返回false
