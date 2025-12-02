import matplotlib.pyplot as plt
import networkx as nx
import os

def save_plot(filename, title):
    plt.title(title)
    plt.axis('off')
    plt.tight_layout()
    plt.savefig(filename, dpi=300, bbox_inches='tight')
    plt.close()
    print(f"Saved {filename}")

def step1_requirements():
    G = nx.Graph()
    center = "Network\nRequirements"
    nodes = [
        "User Count\n& Locations", "App Bandwidth\n(VoIP/Video)", 
        "Storage\n& Backup", "Current\nPerformance", 
        "Growth\nProjection", "Security\n(HIPAA/PCI)", "Budget\n& Timeline"
    ]
    G.add_edges_from([(center, n) for n in nodes])
    
    plt.figure(figsize=(10, 8))
    pos = nx.spring_layout(G, k=0.5, iterations=50)
    # Manually adjust center if needed, but spring is usually okay for star
    
    nx.draw_networkx_nodes(G, pos, node_color=['lightgreen'] + ['lightblue']*len(nodes), node_size=3500)
    nx.draw_networkx_labels(G, pos, font_size=9, font_weight='bold')
    nx.draw_networkx_edges(G, pos, edge_color='gray')
    
    save_plot("1_network_requirements_assessment.png", "Step 1: Network Requirements Assessment")

def step2_topology():
    G = nx.DiGraph()
    # Hierarchical Model
    levels = {
        "Core 1": (0, 4), "Core 2": (2, 4),
        "Dist 1": (0, 2), "Dist 2": (2, 2),
        "Access 1": (-1, 0), "Access 2": (0.5, 0), "Access 3": (2, 0), "Access 4": (3.5, 0)
    }
    
    edges = [
        ("Core 1", "Core 2"),
        ("Core 1", "Dist 1"), ("Core 1", "Dist 2"),
        ("Core 2", "Dist 1"), ("Core 2", "Dist 2"),
        ("Dist 1", "Access 1"), ("Dist 1", "Access 2"),
        ("Dist 2", "Access 3"), ("Dist 2", "Access 4")
    ]
    G.add_edges_from(edges)
    
    plt.figure(figsize=(10, 8))
    pos = levels
    
    color_map = []
    for node in G.nodes():
        if "Core" in node: color_map.append('#ff9999') # Red
        elif "Dist" in node: color_map.append('#66b3ff') # Blue
        else: color_map.append('#99ff99') # Green
            
    nx.draw(G, pos, with_labels=True, node_color=color_map, node_size=3000, font_size=10, font_weight='bold', edge_color='gray', arrows=False)
    # Add layer labels
    plt.text(-2, 4, "Core Layer", fontsize=12, fontweight='bold', color='red')
    plt.text(-2, 2, "Distribution Layer", fontsize=12, fontweight='bold', color='blue')
    plt.text(-2, 0, "Access Layer", fontsize=12, fontweight='bold', color='green')
    
    save_plot("2_network_topology_hierarchical.png", "Step 2: Hierarchical Network Topology")

def step3_ip_scheme():
    # Visualizing a subnet tree
    G = nx.DiGraph()
    root = "10.0.0.0/8\n(Private Corp)"
    subnets = ["10.0.10.x\nIT Dept", "10.0.20.x\nHR Dept", "10.0.30.x\nFinance", "10.0.40.x\nServers"]
    
    edges = [(root, s) for s in subnets]
    G.add_edges_from(edges)
    
    # Add specific hosts
    hosts = {
        "10.0.10.x\nIT Dept": ["10.0.10.1\nGateway", "10.0.10.50+\nDHCP"],
        "10.0.40.x\nServers": ["10.0.40.10\nFile Srv", "10.0.40.11\nApp Srv"]
    }
    for subnet, host_list in hosts.items():
        for h in host_list:
            G.add_edge(subnet, h)

    plt.figure(figsize=(12, 8))
    # Use a hierarchy layout or spring if graphviz is missing
    # Since we know graphviz might be missing in this environment, we'll stick to built-in layouts
    # Custom shell-like layout or just spring
    pos = nx.spring_layout(G, k=0.9, seed=42)
    
    node_sizes = [4000 if n == root else 2500 if "10.0." in n[:5] else 1500 for n in G.nodes()]
    node_colors = ['gold' if n == root else 'lightblue' if "Dept" in n or "Servers" in n else 'lightgrey' for n in G.nodes()]

    nx.draw(G, pos, with_labels=True, node_color=node_colors, node_size=node_sizes, font_size=8, edge_color='gray')
    
    save_plot("3_ip_addressing_scheme.png", "Step 3: IP Addressing Scheme")

def step4_hardware():
    G = nx.DiGraph()
    nodes = [
        ("Internet", "cloud"),
        ("Firewall\n(NGFW)", "box"),
        ("Core Switch\n(L3, 10G)", "box"),
        ("Dist Switch\n(PoE+)", "box"),
        ("Access AP\n(Wi-Fi 6)", "circle"),
        ("VoIP Phone", "circle"),
        ("PC", "circle")
    ]
    
    # Just mapping names for edges
    edge_list = [
        ("Internet", "Firewall\n(NGFW)"),
        ("Firewall\n(NGFW)", "Core Switch\n(L3, 10G)"),
        ("Core Switch\n(L3, 10G)", "Dist Switch\n(PoE+)"),
        ("Dist Switch\n(PoE+)", "Access AP\n(Wi-Fi 6)"),
        ("Dist Switch\n(PoE+)", "VoIP Phone"),
        ("Dist Switch\n(PoE+)", "PC")
    ]
    
    G.add_edges_from(edge_list)
    
    plt.figure(figsize=(10, 6))
    pos = nx.spring_layout(G, seed=42)
    
    # Differentiate shapes? matplotlib scatter can do it, but nx.draw is simpler with colors
    colors = []
    for n in G.nodes():
        if "Internet" in n: colors.append('lightgray')
        elif "Firewall" in n: colors.append('red')
        elif "Core" in n: colors.append('orange')
        elif "Dist" in n: colors.append('blue')
        else: colors.append('green')
        
    nx.draw(G, pos, with_labels=True, node_color=colors, node_size=2500, font_size=9, font_color='black', font_weight='bold')
    save_plot("4_network_hardware_selection.png", "Step 4: Hardware Selection Flow")

def step5_vlan():
    G = nx.Graph()
    switch = "Managed\nSwitch"
    vlans = [
        ("Mgmt PC", "VLAN 10\n(Mgmt)"),
        ("HR PC", "VLAN 20\n(Data)"),
        ("IP Phone", "VLAN 30\n(Voice)"),
        ("Guest Wi-Fi", "VLAN 40\n(Guest)"),
        ("Server", "VLAN 50\n(Srv)")
    ]
    
    for device, vlan_info in vlans:
        G.add_edge(switch, device, label=vlan_info)
        
    plt.figure(figsize=(10, 8))
    pos = nx.spring_layout(G, seed=10)
    
    nx.draw_networkx_nodes(G, pos, node_size=3000, node_color='lightgrey')
    nx.draw_networkx_labels(G, pos)
    nx.draw_networkx_edges(G, pos)
    
    edge_labels = nx.get_edge_attributes(G, 'label')
    nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels, font_color='red')
    
    save_plot("5_vlan_segmentation.png", "Step 5: VLAN Segmentation")

def step6_security():
    G = nx.DiGraph()
    # Layers
    G.add_edge("Internet", "Edge Firewall\n(IPS/IDS)")
    
    # DMZ branch
    G.add_edge("Edge Firewall\n(IPS/IDS)", "DMZ Switch")
    G.add_edge("DMZ Switch", "Web Server")
    G.add_edge("DMZ Switch", "Email Gateway")
    
    # Internal branch
    G.add_edge("Edge Firewall\n(IPS/IDS)", "Core Internal")
    G.add_edge("Core Internal", "NAC / Radius")
    G.add_edge("Core Internal", "Internal Users")
    G.add_edge("Internal Users", "Endpoint\nAntivirus")
    
    plt.figure(figsize=(10, 8))
    pos = nx.spring_layout(G, k=0.7, seed=20)
    
    node_colors = ['red' if 'Firewall' in n or 'DMZ' in n else 'lightgreen' for n in G.nodes()]
    
    nx.draw(G, pos, with_labels=True, node_color=node_colors, node_size=2500, font_size=9)
    save_plot("6_security_architecture.png", "Step 6: Security Architecture (Defense in Depth)")

def step7_redundancy():
    G = nx.MultiGraph() # MultiGraph for dual links
    
    # Nodes
    nodes = ["ISP A", "ISP B", "Core Sw 1", "Core Sw 2", "Access Sw 1"]
    G.add_nodes_from(nodes)
    
    # Positioning
    pos = {
        "ISP A": (-1, 4), "ISP B": (1, 4),
        "Core Sw 1": (-1, 2), "Core Sw 2": (1, 2),
        "Access Sw 1": (0, 0)
    }
    
    plt.figure(figsize=(8, 8))
    
    # Draw Nodes
    nx.draw_networkx_nodes(G, pos, node_size=3000, node_color='lightblue')
    nx.draw_networkx_labels(G, pos)
    
    # Draw Edges
    # ISP links
    nx.draw_networkx_edges(G, pos, edgelist=[("ISP A", "Core Sw 1"), ("ISP B", "Core Sw 2")], width=2)
    
    # Core Redundancy (VRRP) - dashed
    nx.draw_networkx_edges(G, pos, edgelist=[("Core Sw 1", "Core Sw 2")], style='dashed', edge_color='red', width=2, label="VRRP/HSRP")
    
    # Downlinks (LACP) - double lines simulated by offset or just thick
    nx.draw_networkx_edges(G, pos, edgelist=[("Core Sw 1", "Access Sw 1"), ("Core Sw 2", "Access Sw 1")], width=3, edge_color='green')
    
    plt.text(0, 2.2, "VRRP Link", ha='center', color='red')
    plt.text(-0.8, 1, "Redundant Link", ha='right', color='green')
    plt.text(0.8, 1, "Redundant Link", ha='left', color='green')
    
    save_plot("7_redundancy_and_ha.png", "Step 7: Redundancy & High Availability")

def step8_qos():
    # Conceptual diagram for QoS
    # A queue
    plt.figure(figsize=(10, 6))
    
    # Draw a "Pipe"
    plt.plot([0, 8], [2, 2], 'k-', linewidth=2)
    plt.plot([0, 8], [4, 4], 'k-', linewidth=2)
    
    # Packets
    # Voice (Priority 1)
    circle1 = plt.Circle((2, 3), 0.4, color='red', label='Voice (Expedited)')
    plt.gca().add_patch(circle1)
    plt.text(2, 3, "VOICE", ha='center', va='center', color='white', fontsize=8)
    
    # Video (Priority 2)
    circle2 = plt.Circle((4, 3), 0.4, color='orange', label='Video (Assured)')
    plt.gca().add_patch(circle2)
    plt.text(4, 3, "VIDEO", ha='center', va='center', color='black', fontsize=8)
    
    # Data (Best Effort)
    circle3 = plt.Circle((6, 3), 0.4, color='gray', label='Data (Best Effort)')
    plt.gca().add_patch(circle3)
    plt.text(6, 3, "DATA", ha='center', va='center', color='white', fontsize=8)
    
    plt.text(0.5, 4.2, "Ingress", fontsize=12)
    plt.text(7.5, 4.2, "Egress", fontsize=12)
    
    plt.title("Step 8: QoS - Prioritizing Traffic")
    plt.xlim(0, 9)
    plt.ylim(1, 5)
    plt.axis('off')
    
    # Legend
    plt.legend(handles=[circle1, circle2, circle3], loc='lower center')
    
    plt.savefig("8_qos_prioritization.png", dpi=300, bbox_inches='tight')
    plt.close()
    print("Saved 8_qos_prioritization.png")

def step9_documentation():
    G = nx.Graph()
    center = "Network\nDocumentation"
    docs = [
        "Topology\nDiagrams", "IP Address\nSpreadsheet", 
        "Rack\nElevations", "Cable\nPlant", 
        "Device\nConfigs", "Change\nLogs", "Runbooks"
    ]
    
    G.add_edges_from([(center, d) for d in docs])
    
    plt.figure(figsize=(10, 8))
    pos = nx.spring_layout(G, k=0.6)
    
    nx.draw(G, pos, with_labels=True, node_color=['gold'] + ['white']*len(docs), node_size=3000, edge_color='blue', font_size=9)
    
    save_plot("9_network_documentation.png", "Step 9: Essential Documentation")

def step10_monitoring():
    G = nx.DiGraph()
    monitor = "NMS Server\n(SNMP/NetFlow)"
    devices = ["Router", "Core Switch", "Server Farm", "Firewall", "Access Switch"]
    
    edges = [(d, monitor) for d in devices]
    G.add_edges_from(edges)
    
    plt.figure(figsize=(10, 8))
    pos = nx.spring_layout(G)
    
    nx.draw_networkx_nodes(G, pos, nodelist=[monitor], node_color='cyan', node_size=4000, node_shape='s')
    nx.draw_networkx_nodes(G, pos, nodelist=devices, node_color='lightgrey', node_size=2500)
    
    # Dashed lines for "Reporting"
    nx.draw_networkx_edges(G, pos, style='dotted', edge_color='blue', arrows=True)
    
    nx.draw_networkx_labels(G, pos)
    
    # Annotations
    plt.text(0, 0, "Collecting: CPU, Bandwidth, Errors, Uptime", transform=plt.gca().transAxes, fontsize=10, bbox=dict(facecolor='white', alpha=0.5))
    
    save_plot("10_monitoring_and_management.png", "Step 10: Monitoring & Management")

if __name__ == "__main__":
    step1_requirements()
    step2_topology()
    step3_ip_scheme()
    step4_hardware()
    step5_vlan()
    step6_security()
    step7_redundancy()
    step8_qos()
    step9_documentation()
    step10_monitoring()
