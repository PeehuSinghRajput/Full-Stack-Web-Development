import {readFile,writeFile,appendFile,mkdir} from 'fs/promises';

const read_file=async(filename)=>{
    const data= await readFile(filename,'utf-8');
    console.log(data);
}

read_file('read.txt')

const creat_file = async(filename,content)=>{
    await writeFile(filename,content);
    console.log("file created successfully");
}

creat_file('sample.txt',"this is my test file for writefile from file system modules in node js")

const append_file = async(filename,content)=>{
    await appendFile(filename,content)
    console.log("content added successfully")
}

append_file('sample.txt',"mujhe toh bass add karna tha")


const creat_dir = async(dir)=>{
    await mkdir(dir);
    console.log("directory creted successfully")
}

// creat_dir('src/components')

