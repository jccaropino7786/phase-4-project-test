class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :name, :cost, :description
end
