class ProjectMaterialSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :cost, :name
  has_one :material
  has_one :project

  def cost
    self.object.material.cost
  end

  def name
    self.object.material.name
  end
end
