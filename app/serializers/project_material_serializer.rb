class ProjectMaterialSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :cost
  has_one :material
  has_one :project

  def cost
    self.object.material.cost
  end
end
