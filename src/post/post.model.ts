import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @Column()
    content: string

    @CreateDateColumn({ type: 'timestamptz' })
    created: Date
    
    @Column({default:0})
    likes: number

    @Column({default:0})
    dislikes: number

    @Column({default:0})
    comments: number

    @Column()
    email: string

    @Column({default:1})
    type: number

    @OneToMany(()=> Post, post => post.post)
    commendsList: Post[]

    @ManyToOne(() => Post, (post) => post.commendsList)
    post: Post;



}