import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSpecificationsCars1617370114443 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name:"specifications_cars",
                columns:[
                    {
                        name:"car_id",
                        type:"uuid"
                    },
                    {
                        name:"specification_id",
                        type: "uuid"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ]
            })
        );

        await queryRunner.createForeignKey(
            "specifications_cars",
            new TableForeignKey({
                name: "FKspecificationCar",
                referencedTableName: "specifications",
                referencedColumnNames:["id"],
                columnNames:["specification_id"],
                onDelete:"SET NULL",
                onUpdate:"SET NULL"
            })
        );
        await queryRunner.createForeignKey(
            "specifications_cars",
            new TableForeignKey({
                name: "FKcarspecification",
                referencedTableName: "cars",
                referencedColumnNames:["id"],
                columnNames:["car_id"],
                onDelete:"SET NULL",
                onUpdate:"SET NULL"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey("specifications_cars","FKcarspecification");

        await queryRunner.dropForeignKey("specifications_cars","FKspecificationCar");

        await queryRunner.dropTable("specifications_cars");

        
    }

}
