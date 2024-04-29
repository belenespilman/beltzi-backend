import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm';
import { UserRole } from '../enums/userRole.enum';

@Entity() 
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string 

    @Column({
      type: 'varchar',
      unique: true,
      nullable: false  
    })
    email!: string

    @Column({
        type: 'varchar',
        nullable: false  
      })
    password!: string

    @Column({
        type: 'varchar',
        nullable: false  
      })
    firstName!: string

    @Column({
        type: 'varchar',
        nullable: false  
      })
    lastName!: string

    @Column({
        type: 'enum',
        enum: UserRole,
        nullable: false,
        default: UserRole.STUDENT
    })
    role!: UserRole

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date

    @DeleteDateColumn()
    deletedAt?: Date
}