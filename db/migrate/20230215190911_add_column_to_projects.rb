class AddColumnToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :status, :string, default: "pending"
  end
end
