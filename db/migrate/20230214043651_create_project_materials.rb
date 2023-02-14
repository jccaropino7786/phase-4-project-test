class CreateProjectMaterials < ActiveRecord::Migration[6.1]
  def change
    create_table :project_materials do |t|
      t.references :material, null: false, foreign_key: true
      t.references :project, null: false, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
