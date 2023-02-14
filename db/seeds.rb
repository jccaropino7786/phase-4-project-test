puts "Deleting Old Data"
User.destroy_all
Project.destroy_all
Material.destroy_all
ProjectMaterial.destroy_all

puts "Seeding Users"
    u1 = User.create(email: 'jc@live.com', password: "1234"  )

puts "Seeding Projects"
    p1 = Project.create(user_id: u1, summary: "Building House in Mexico")
    p2 = Project.create(user_id: u1, summary: "Building House in LA")
    p3 = Project.create(user_id: u1, summary: "Building House in Guam")


puts "Seeding Materials"

    m1 = Material.create(name: "plywood sheets", cost: 12)
    m2 = Material.create(name: "nails", cost: 2)
    m3 = Material.create(name: "2 x 4", cost: 6)
    m4 = Material.create(name: "1/2' PVC", cost: 3)


puts "Seeding Project Materials"

ProjectMaterial.create(material_id: m1, project_id: p1, quantity: 15)
ProjectMaterial.create(material_id: m1, project_id: p2, quantity: 25) 
ProjectMaterial.create(material_id: m1, project_id: p3, quantity: 35) 
ProjectMaterial.create(material_id: m2, project_id: p1, quantity: 45) 
ProjectMaterial.create(material_id: m2, project_id: p2, quantity: 45) 
ProjectMaterial.create(material_id: m3, project_id: p1, quantity: 45) 
ProjectMaterial.create(material_id: m3, project_id: p2, quantity: 12) 
ProjectMaterial.create(material_id: m4, project_id: p2, quantity: 13) 
ProjectMaterial.create(material_id: m4, project_id: p3, quantity: 14)
ProjectMaterial.create(material_id: m4, project_id: p3, quantity: 15) 
